// Copyright (c) 2024, Hybrowlabs Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on("VLAN", {
	validate: function(frm) {
        let id = frm.doc.id
        let re_number = /^([1-9]|[1-9][0-9]{1,2}|[1-3][0-9]{3}|40[0-8][0-9]|409[0-4])$/;
        if (!re_number.test(id)) {
            frappe.msgprint(__('ID should be integer between 1 to 4094'));
            frappe.validated = false;
        }
	},
});
