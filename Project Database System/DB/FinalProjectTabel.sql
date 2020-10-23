CREATE DATABASE RALaundry
DROP DATABASE RALaundry

USE RALaundry

CREATE TABLE MsStaff(
	StaffID VARCHAR(5) NOT NULL CHECK (StaffID LIKE 'ST[0-9][0-9][0-9]'),
	StaffName VARCHAR(255) NOT NULL,
	StaffAddress VARCHAR(255) NOT NULL,
	StaffGender VARCHAR(255) NOT NULL,
	StaffSalary INT NOT NULL CHECK (StaffSalary > 1500000 AND StaffSalary < 3000000),
	PRIMARY KEY (StaffID)
)

CREATE TABLE MsMaterial(
	MaterialID VARCHAR(5) NOT NULL CHECK (MaterialID LIKE 'MA[0-9][0-9][0-9]'),
	MaterialName VARCHAR(255) NOT NULL,
	MaterialType VARCHAR(255) NOT NULL 
	CHECK (MaterialType = 'Equipment' OR MaterialType = 'Supplies'),
	MaterialPrice INT NOT NULL,
	PRIMARY KEY (MaterialID)
)

CREATE TABLE MsVendor(
	VendorID VARCHAR(5) NOT NULL CHECK (VendorID LIKE 'VE[0-9][0-9][0-9]'),
	VendorName VARCHAR(255) NOT NULL,
	VendorAddress VARCHAR(255) NOT NULL CHECK (LEN(VendorAddress) > 10),
	VendorPhoneNumber VARCHAR(255) NOT NULL,
	PRIMARY KEY (VendorID)
)

CREATE TABLE MsCustomer(
	CustomerID VARCHAR(5) NOT NULL CHECK (CustomerID LIKE 'CU[0-9][0-9][0-9]'),
	CustomerName VARCHAR(255) NOT NULL,
	CustomerAddress VARCHAR(255) NOT NULL,
	CustomerGender VARCHAR(255) NOT NULL 
	CHECK (CustomerGender = 'Male' OR CustomerGender = 'Female'),
	CustomerDOB DATE NOT NULL,
	PRIMARY KEY (CustomerID)
)

CREATE TABLE MsClothes(
	ClothesID VARCHAR(5) NOT NULL CHECK (ClothesID LIKE 'CL[0-9][0-9][0-9]'),
	ClothesName VARCHAR(255) NOT NULL,
	ClothesType VARCHAR(255) NOT NULL 
	CHECK (ClothesType = 'Cotton' OR ClothesType = 'Viscose' OR ClothesType = 'Polyester' 
	OR ClothesType = 'Linen' OR ClothesType = 'Wool'),
	PRIMARY KEY (ClothesID)
)

CREATE TABLE PurchaseTransaction(
	PurchaseID VARCHAR(5) NOT NULL CHECK (PurchaseID LIKE 'PU[0-9][0-9][0-9]'),
	StaffID VARCHAR(5) NOT NULL CHECK (StaffID LIKE 'ST[0-9][0-9][0-9]') 
	FOREIGN KEY (StaffID) REFERENCES MsStaff(StaffID),
	VendorID VARCHAR(5) NOT NULL CHECK (VendorID LIKE 'VE[0-9][0-9][0-9]') 
	FOREIGN KEY (VendorID) REFERENCES MsVendor(VendorID),
	PurchaseDate DATE NOT NULL CHECK (YEAR(PurchaseDate) = YEAR(GETDATE())),
	PRIMARY KEY (PurchaseID),
)

CREATE TABLE DetailPurchaseTransaction(
	PurchaseID VARCHAR(5) NOT NULL CHECK (PurchaseID LIKE 'PU[0-9][0-9][0-9]')
	FOREIGN KEY (PurchaseID) REFERENCES PurchaseTransaction (PurchaseID),
	MaterialID VARCHAR(5) NOT NULL CHECK (MaterialID LIKE 'MA[0-9][0-9][0-9]')
	FOREIGN KEY (MaterialID) REFERENCES MsMaterial (MaterialID),
	QuantityOfMaterial INT NOT NULL,
	PRIMARY KEY (PurchaseID, MaterialID)
)

CREATE TABLE ServiceTransaction(
	ServiceID VARCHAR(5) NOT NULL CHECK (ServiceID LIKE 'SR[0-9][0-9][0-9]'),
	StaffID VARCHAR(5) NOT NULL CHECK (StaffID LIKE 'ST[0-9][0-9][0-9]') 
	FOREIGN KEY (StaffID) REFERENCES MsStaff(StaffID),
	CustomerID VARCHAR(5) NOT NULL CHECK (CustomerID LIKE 'CU[0-9][0-9][0-9]') 
	FOREIGN KEY (CustomerID) REFERENCES MsCustomer(CustomerID),
	ServiceDate DATE NOT NULL CHECK (YEAR(ServiceDate) = YEAR(GETDATE())),
	ServiceType VARCHAR(255) NOT NULL CHECK (ServiceType = 'Laundry service' 
	OR ServiceType = 'Dry Cleaning Service' OR ServiceType = 'Ironing Service'),
	ServicePrice INT NOT NULL,
	PRIMARY KEY (ServiceID)
)

CREATE TABLE DetailServiceTransaction(
	ServiceID VARCHAR(5) NOT NULL CHECK (ServiceID LIKE 'SR[0-9][0-9][0-9]')
	FOREIGN KEY (ServiceID) REFERENCES ServiceTransaction (ServiceID),
	ClothesID VARCHAR(5) NOT NULL CHECK (ClothesID LIKE 'CL[0-9][0-9][0-9]')
	FOREIGN KEY (ClothesID) REFERENCES MsClothes (ClothesID),
	PRIMARY KEY (ServiceID, ClothesID)
)

SELECT *
FROM MsStaff
SELECT *
FROM PurchaseTransaction
SELECT *
FROM DetailPurchaseTransaction
SELECT *
FROM MsMaterial
SELECT *
FROM MsVendor
SELECT *
FROM MsCustomer
SELECT *
FROM ServiceTransaction
SELECT *
FROM DetailServiceTransaction
SELECT *
FROM MsClothes


