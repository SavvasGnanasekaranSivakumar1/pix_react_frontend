// Home.js
import React from 'react';
import "./TableData.css";
const Planning = () => {
const planningList = [
    	{
    		"PO_LINE_COUNT" : 0,
    		"PO_NO" : "34986",
    		"PO_ID" : 3511732,
    		"PO_VERSION" : 1,
    		"RELEASE_NO" : "0",
    		"ORDER_DELIVERY_DATE" : "2009-03-12T18:30:00.000Z",
    		"MATERIAL_NO" : "0000017939",
    		"PAPER_BW_GRD" : "MANISTIQUE",
    		"TITLE_DESC" : "35#-MANISTIQUE PPI : 688 ",
    		"POSTED_DATE" : "2009-02-24T09:35:53.000Z",
    		"POSTED_BY" : "Pat Ix",
    		"TOTAL_QUANTITY" : 339456,
    		"STATUS_DESCRIPTION" : "Original",
    		"AMENDED_BY" : "vgrifma",
    		"ACKNOWLEDGE" : "Yes",
    		"NAME_1" : "Pearson Education US",
    		"NAME_2" : "Quad Graphics Fairfield",
    		"VENDOR_NAME_2" : "Bulkley Dunton Publishing Group",
    		"VENDOR_CONTACT" : "Joel Hinkle "
    	},
    	{
    		"PO_LINE_COUNT" : 0,
    		"PO_NO" : "34990",
    		"PO_ID" : 3511742,
    		"PO_VERSION" : 1,
    		"RELEASE_NO" : "0",
    		"ORDER_DELIVERY_DATE" : "2009-03-30T18:30:00.000Z",
    		"MATERIAL_NO" : "0000017939",
    		"PAPER_BW_GRD" : "MANISTIQUE",
    		"TITLE_DESC" : "35#-MANISTIQUE PPI : 688 ",
    		"POSTED_DATE" : "2009-02-24T09:36:12.000Z",
    		"POSTED_BY" : "Pat Ix",
    		"TOTAL_QUANTITY" : 765356,
    		"STATUS_DESCRIPTION" : "Original",
    		"AMENDED_BY" : "vgrifma",
    		"ACKNOWLEDGE" : "Yes",
    		"NAME_1" : "Pearson Education US",
    		"NAME_2" : "Quad Graphics Fairfield",
    		"VENDOR_NAME_2" : "Bulkley Dunton Publishing Group",
    		"VENDOR_CONTACT" : "Joel Hinkle "
    	},
    	{
    		"PO_LINE_COUNT" : 0,
    		"PO_NO" : "34999",
    		"PO_ID" : 3511752,
    		"PO_VERSION" : 1,
    		"RELEASE_NO" : "0",
    		"ORDER_DELIVERY_DATE" : "2009-04-14T18:30:00.000Z",
    		"MATERIAL_NO" : "0000017939",
    		"PAPER_BW_GRD" : "MANISTIQUE",
    		"TITLE_DESC" : "35#-MANISTIQUE PPI : 688 ",
    		"POSTED_DATE" : "2009-02-24T09:36:37.000Z",
    		"POSTED_BY" : "Pat Ix",
    		"TOTAL_QUANTITY" : 1269654,
    		"STATUS_DESCRIPTION" : "Original",
    		"AMENDED_BY" : "vgrifma",
    		"ACKNOWLEDGE" : "Yes",
    		"NAME_1" : "Pearson Education US",
    		"NAME_2" : "Quad Graphics Fairfield",
    		"VENDOR_NAME_2" : "Bulkley Dunton Publishing Group",
    		"VENDOR_CONTACT" : "Joel Hinkle "
    	},
    	{
    		"PO_LINE_COUNT" : 0,
    		"PO_NO" : "35008",
    		"PO_ID" : 3511762,
    		"PO_VERSION" : 1,
    		"RELEASE_NO" : "0",
    		"ORDER_DELIVERY_DATE" : "2009-04-29T18:30:00.000Z",
    		"MATERIAL_NO" : "0000017939",
    		"PAPER_BW_GRD" : "MANISTIQUE",
    		"TITLE_DESC" : "35#-MANISTIQUE PPI : 688 ",
    		"POSTED_DATE" : "2009-02-24T09:36:52.000Z",
    		"POSTED_BY" : "Pat Ix",
    		"TOTAL_QUANTITY" : 700596,
    		"STATUS_DESCRIPTION" : "Original",
    		"AMENDED_BY" : "vgrifma",
    		"ACKNOWLEDGE" : "Yes",
    		"NAME_1" : "Pearson Education US",
    		"NAME_2" : "Quad Graphics Fairfield",
    		"VENDOR_NAME_2" : "Bulkley Dunton Publishing Group",
    		"VENDOR_CONTACT" : "Joel Hinkle "
    	},
    	{
    		"PO_LINE_COUNT" : 0,
    		"PO_NO" : "35021",
    		"PO_ID" : 3511772,
    		"PO_VERSION" : 1,
    		"RELEASE_NO" : "0",
    		"ORDER_DELIVERY_DATE" : "2009-05-14T18:30:00.000Z",
    		"MATERIAL_NO" : "0000017939",
    		"PAPER_BW_GRD" : "MANISTIQUE",
    		"TITLE_DESC" : "35#-MANISTIQUE PPI : 688 ",
    		"POSTED_DATE" : "2009-02-24T09:37:45.000Z",
    		"POSTED_BY" : "Pat Ix",
    		"TOTAL_QUANTITY" : 624249,
    		"STATUS_DESCRIPTION" : "Original",
    		"AMENDED_BY" : "vgrifma",
    		"ACKNOWLEDGE" : "Yes",
    		"NAME_1" : "Pearson Education US",
    		"NAME_2" : "Quad Graphics Fairfield",
    		"VENDOR_NAME_2" : "Bulkley Dunton Publishing Group",
    		"VENDOR_CONTACT" : "Joel Hinkle "
    	}

  ];
  return <div><h2>Planning</h2> <table className="data-table">
                                 <thead>
                                   <tr>
                                     <th>SNO</th>
                                     <th>PO_NO</th>
                                     <th>PO_ID</th>
                                     <th>PO_VERSION</th>
                                     <th>RELEASE_NO</th>
                                     <th>ORDER_DELIVERY_DATE</th>
                                     <th>MATERIAL_NO</th>
                                     <th>PAPER_BW_GRD</th>
                                     <th>TITLE_DESC</th>
                                     <th>POSTED_DATE</th>
                                     <th>POSTED_BY</th>
                                     <th>TOTAL_QUANTITY</th>
                                     <th>STATUS_DESCRIPTION</th>
                                     <th>AMENDED_BY</th>
                                     <th>NAME_1</th>
                                        <th>NAME_2</th>
                                        <th>VENDOR_NAME_2</th>
                                        <th>VENDOR_CONTACT</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                   {planningList.map((planning,index) => (
                                     <tr key={planning.PO_NO}>
                                        <td>{index+1}</td>
                                       <td>{planning.PO_NO}</td>
                                       <td>{planning.PO_ID}</td>
                                       <td>{planning.PO_VERSION}</td>
                                       <td>{planning.RELEASE_NO}</td>
                                       <td>{planning.ORDER_DELIVERY_DATE}</td>
                                       <td>{planning.MATERIAL_NO}</td>
                                       <td>{planning.PAPER_BW_GRD}</td>
                                       <td>{planning.TITLE_DESC}</td>
                                       <td>{planning.POSTED_DATE}</td>
                                       <td>{planning.POSTED_BY}</td>
                                       <td>{planning.TOTAL_QUANTITY}</td>
                                       <td>{planning.STATUS_DESCRIPTION}</td>
                                       <td>{planning.AMENDED_BY}</td>
                                       <td>{planning.NAME_1}</td>
                                       <td>{planning.NAME_2}</td>
                                       <td>{planning.VENDOR_NAME_2}</td>
                                       <td>{planning.VENDOR_CONTACT}</td>

                                     </tr>
                                   ))}
                                 </tbody>
                               </table></div>;
};





export default Planning;