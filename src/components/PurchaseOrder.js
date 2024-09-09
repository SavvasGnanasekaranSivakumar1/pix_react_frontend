// Home.js
import React from 'react';

const PurchaseOrder = () => {
  //return <h2>Purchase Order</h2>;

const purchaseOrderList=
[
    {
		"PO_NO" : "0412062305",
		"PO_ID" : 16675603,
		"PO_VERSION" : 1,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 45,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-09-05T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Original$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062301",
		"PO_ID" : 16675403,
		"PO_VERSION" : 1,
		"RELEASE_NO" : 0,
		"ISBN10" : "141830025X",
		"PRINT_NO" : 7,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ADVANCED PLACEMENT CALCUL",
		"POSTED_DATE" : "2024-07-30T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Finn, Suzanne",
		"STATUS_DESCRIPTION" : "Original$",
		"AMENDED_BY" : "Suzanne Finn",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062299",
		"PO_ID" : 16675203,
		"PO_VERSION" : 1,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 43,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-07-18T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Original$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062296",
		"PO_ID" : 16675003,
		"PO_VERSION" : 2,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 40,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-07-10T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Amended$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062292",
		"PO_ID" : 16674813,
		"PO_VERSION" : 1,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 39,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-06-24T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Original$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062291",
		"PO_ID" : 16674803,
		"PO_VERSION" : 2,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 38,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-06-23T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Amended$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062283",
		"PO_ID" : 16674603,
		"PO_VERSION" : 2,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 33,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-06-12T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Amended$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	},
	{
		"PO_NO" : "0412062282",
		"PO_ID" : 16674403,
		"PO_VERSION" : 1,
		"RELEASE_NO" : 0,
		"ISBN10" : "1418291595",
		"PRINT_NO" : 32,
		"PAPER_GRADE" : null,
		"ORDER_TYPE" : "S",
		"TITLE_DESC" : "ELEVATE MIDDLE GRADE SCIE",
		"POSTED_DATE" : "2024-05-22T18:30:00.000Z",
		"NAME_1" : "Prentice Hall School \/ Breen, Jane",
		"STATUS_DESCRIPTION" : "Original$",
		"AMENDED_BY" : "Jane Breen",
		"NAME_2" : "LSC\/GENERAL",
		"VENDOR_CONTACT" : null,
		"GANG" : null
	}
]
    return <div><h2>Planning</h2> <table className="data-table">
                                     <thead>
                                       <tr>
                                        <th>PO No</th>
                                         <th>PO ID</th>
                                         <th>PO Version</th>
                                         <th>Release No</th>
                                         <th>ISBN10</th>
                                         <th>Print No</th>
                                         <th>Paper Grade</th>
                                         <th>Order Type</th>
                                         <th>Title Desc</th>
                                         <th>Posted Date</th>
                                         <th>Name 1</th>
                                         <th>Status Description</th>
                                         <th>Amended By</th>
                                         <th>Name 2</th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                        {purchaseOrderList.map((purchaseOrder,index) => (
                                         <tr key={index}>
                                          <td>{index+1}</td>
                                         <td>{purchaseOrder.PO_NO}</td>
                                         <td>{purchaseOrder.PO_ID}</td>
                                         <td>{purchaseOrder.PO_VERSION}</td>
                                         <td>{purchaseOrder.ISBN10}</td>
                                         <td>{purchaseOrder.PRINT_NO}</td>
                                         <td>{purchaseOrder.PAPER_GRADE}</td>
                                         <td>{purchaseOrder.ORDER_TYPE}</td>
                                         <td>{purchaseOrder.TITLE_DESC}</td>
                                         <td>{purchaseOrder.POSTED_DATE}</td>
                                         <td>{purchaseOrder.NAME_1}</td>
                                         <td>{purchaseOrder.STATUS_DESCRIPTION}</td>
                                         <td>{purchaseOrder.AMENDED_BY}</td>
                                         <td>{purchaseOrder.NAME_2}</td>
                                         </tr>))}
                                         </tbody>
                                  </table></div>;

};

export default PurchaseOrder;