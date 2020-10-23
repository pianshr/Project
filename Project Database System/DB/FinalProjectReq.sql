--1-- 
SELECT 
	c.CustomerID, 
	c.CustomerName,
	SUM(st.ServicePrice) AS 'TotalServicePrice'
FROM MsCustomer c, ServiceTransaction st
WHERE c.CustomerID = st.CustomerID AND DATENAME(MONTH, st.ServiceDate) = 'July' AND c.CustomerGender = 'Male'
GROUP BY c.CustomerID, c.CustomerName

--2--
SELECT 
	s.StaffName,
	pt.PurchaseDate,
	COUNT(pt.PurchaseID) AS 'TotalTransaction'
FROM MsStaff s, PurchaseTransaction pt
WHERE s.StaffID = pt.StaffID
GROUP BY s.StaffName, pt.PurchaseDate
HAVING s.StaffName LIKE '%o%' AND COUNT(pt.PurchaseID) > 1

--3--
SELECT 
	v.VendorName, 
	CONVERT(VARCHAR, pt.PurchaseDate, 107) AS 'PurchaseDate',
	COUNT(pt.PurchaseID) AS 'TotalTransaction',
	(SUM(dpt.QuantityOfMaterial * m.MaterialPrice)) AS 'TotalPurchasePrice'
FROM MsVendor v, PurchaseTransaction pt, MsMaterial m, DetailPurchaseTransaction dpt
WHERE v.VendorID = pt.VendorID AND m.MaterialID = dpt.MaterialID AND pt.PurchaseID = dpt.PurchaseID 
AND LEFT(v.VendorName, 3) = 'PT.' AND DAY(pt.PurchaseDate)%2 != 0
GROUP BY v.VendorName, pt.PurchaseDate, m.MaterialPrice

--4--
SELECT 
	s.StaffName,
	m.MaterialName,
	COUNT(pt.PurchaseID) AS 'TotalTransaction',
	CAST(SUM(dpt.QuantityOfMaterial) AS VARCHAR) + ' pcs' AS 'TotalQuantity'
FROM PurchaseTransaction pt
JOIN MsStaff s
ON pt.StaffID = s.StaffID
JOIN DetailPurchaseTransaction dpt
ON pt.PurchaseID = dpt.PurchaseID
JOIN MsMaterial m
ON dpt.MaterialID = m.MaterialID
WHERE MONTH(pt.PurchaseDate) = 7
GROUP BY s.StaffName, m.MaterialName
HAVING SUM(dpt.QuantityOfMaterial) < 9

--5--
SELECT
	'Material ' + SUBSTRING(a.MaterialID, 3, 3) AS 'MaterialID', 
	UPPER(a.MaterialName) AS 'MaterialName', 
	c.PurchaseDate, 
	b.QuantityOfMaterial
FROM MsMaterial a 
     JOIN DetailPurchaseTransaction b ON a.MaterialID = b.MaterialID  
	 JOIN PurchaseTransaction c ON b.PurchaseID = c.PurchaseID, (
	 SELECT 
		AVG(QuantityOfMaterial) AS 'AverageQuantity' 
	 FROM DetailPurchaseTransaction
	 ) AS AverageQuantityTable
WHERE a.MaterialType = 'Supplies' AND b.QuantityOfMaterial > AverageQuantityTable.AverageQuantity
ORDER BY a.MaterialID ASC

--6--
SELECT
	ms.StaffName,
	mc.CustomerName,
	CONVERT(VARCHAR, st.ServiceDate, 106) AS 'ServiceDate'
FROM MsStaff ms, MsCustomer mc, ServiceTransaction st, (
	SELECT AVG(StaffSalary) AS 'AverageSalary'
	FROM MsStaff
) AS AverageSalaryTable
WHERE ms.StaffID = st.StaffID AND st.CustomerID = mc.CustomerID 
AND ms.StaffSalary > AverageSalaryTable.AverageSalary AND CHARINDEX(' ', ms.StaffName) = 0
GROUP BY ms.StaffName, mc.CustomerName, st.ServiceDate

--7--
SELECT
	mcl.ClothesName,
	CAST (COUNT(st.ServiceID) AS VARCHAR) + ' transaction' AS 'Total Transaction',
	LEFT(st.ServiceType, 1) AS 'ServiceType',
	st.ServicePrice
FROM MsClothes mcl, ServiceTransaction st, DetailServiceTransaction dst, (
	SELECT AVG(ServicePrice) AS 'AverageServicePrice'
	FROM ServiceTransaction
) AS AverageServiceTransactionTable
WHERE mcl.ClothesID = dst.ClothesID AND dst.ServiceID = st.ServiceID 
AND st.ServicePrice < AverageServiceTransactionTable.AverageServicePrice AND mcl.ClothesType = 'Cotton'
GROUP BY mcl.ClothesName, st.ServiceType, st.ServicePrice

--8--
SELECT 
	SUBSTRING(ms.StaffName, 0, CHARINDEX(' ', ms.StaffName)) AS 'StaffFirstName',
	mv.VendorName,
	'+628' + SUBSTRING(mv.VendorPhoneNumber, 3, 10) AS 'VendorPhoneNumber',
	COUNT(pt.PurchaseID) AS 'TotalTransaction'
FROM MsStaff ms, MsVendor mv, PurchaseTransaction pt, DetailPurchaseTransaction dpt, (
	 SELECT 
		AVG(QuantityOfMaterial) AS 'AverageQuantity' 
	 FROM DetailPurchaseTransaction
	 ) AS AverageQuantityTable
WHERE ms.StaffID = pt.StaffID AND mv.VendorID = pt.VendorID AND pt.PurchaseID = dpt.PurchaseID 
AND CHARINDEX(' ', ms.StaffName) > 0 AND dpt.QuantityOfMaterial > AverageQuantityTable.AverageQuantity
GROUP BY ms.StaffName, mv.VendorName, mv.VendorPhoneNumber

--9--
CREATE VIEW ViewMaterialPurchase AS 
SELECT
	mm.MaterialName,
	'Rp. ' + CAST(mm.MaterialPrice AS VARCHAR) AS 'MaterialPrice',
	COUNT(pt.PurchaseID) AS 'TotalTransaction',
	SUM(dpt.QuantityOfMaterial * mm.MaterialPrice) AS 'TotalPrice'
FROM MsMaterial mm, PurchaseTransaction pt, DetailPurchaseTransaction dpt
WHERE mm.MaterialID = dpt.MaterialID AND pt.PurchaseID = dpt.PurchaseID AND mm.MaterialType = 'Supplies' 
GROUP BY mm.MaterialName, mm.MaterialPrice, dpt.QuantityOfMaterial
HAVING COUNT(pt.PurchaseID) > 2

SELECT * FROM ViewMaterialPurchase

--10--
CREATE VIEW ViewMaleCustomerTransaction AS 
SELECT
	mc.CustomerName,
	mcl.ClothesName,
	COUNT(st.ServiceID) AS 'TotalTransaction',
	SUM(st.ServicePrice) AS 'TotalPrice'
FROM MsCustomer mc, MsClothes mcl, ServiceTransaction st, DetailServiceTransaction dst
WHERE mc.CustomerID = st.CustomerID AND st.ServiceID = dst.ServiceID AND dst.ClothesID = mcl.ClothesID 
AND mc.CustomerGender = 'Male' AND mcl.ClothesType IN ('Wool', 'Linen')
GROUP BY mc.CustomerName, mcl.ClothesName    

SELECT * FROM ViewMaleCustomerTransaction
