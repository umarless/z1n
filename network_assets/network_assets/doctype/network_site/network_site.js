// Copyright (c) 2024, Hybrowlabs Technologies and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Network Site", {
// 	onload: function(frm) {
//         frm.set_query("site_address", function() {
//             return {
//                 "filters": {
//                     "address_type": "Network Site"
//                 }
//             };
//         });
// 	},
// });

frappe.ui.form.on("Network Site", {
    refresh: function(frm) {
        frm.set_query("site_address", function() {
            return {
                "filters": {
                    "address_type": "Network Site"
                }   
            }
        })
    }
});
