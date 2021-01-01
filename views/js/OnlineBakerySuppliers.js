// returns a number that represents the sum of all the selected menu
// item quantity.
function calculateBill(idMenuTable) {
    var fBillTotal = 0.0;
    var i = 0;
    var aCBTags = document.querySelectorAll('input');
    for (i = 0; i < aCBTags.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(aCBTags[i], 'TR');
            // retrieve the quantity from the quantity column, which is the third column in the table
            var oTDQuantity = oTR.getElementsByTagName('TD')[3];
            // the first child text node of the column contains the Quantity
            fBillTotal += parseFloat(oTDQuantity.firstChild.data);
        };
    };
    // return the Quantity as a decimal number with 0 decimal places
    return Math.round(fBillTotal * 100) / 100;
};

function highlightMostwanted(idTable, bShowVeg) {
    // if bShowVeg is true, then we're highlighting mostwanted
    //	meals, otherwise we're unhighlighting them.
    var i = 0;
    var oTable = document.getElementById(idTable);
    var oTBODY = oTable.getElementsByTagName('tbody')[0];
    var aTRs = oTBODY.getElementsByTagName('tr');
    // walk through each of the table rows and see if it has a 
    // "mostwanted" attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('mostwanted') == "true") {
            if (bShowVeg) {
                aTRs[i].style.backgroundColor = "lightGreen";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};