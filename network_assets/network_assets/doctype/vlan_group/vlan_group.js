// Copyright (c) 2024, Hybrowlabs Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on("VLAN Group", {
	validate: function(frm) {
        let min_vlan = frm.doc.minimum_vlan_id
        let max_vlan = frm.doc.maximum_vlan_id
        let re_number = /^([1-9]|[1-9][0-9]{1,2}|[1-3][0-9]{3}|40[0-8][0-9]|409[0-4])$/;
        if (!(re_number.test(min_vlan) && re_number.test(max_vlan))) {
            frappe.msgprint(__('ID should be integer between 1 to 4094'));
            frappe.validated = false;
        }
        if (min_vlan >= max_vlan) {
            const max_label = __('Maximum VLAN ID').bold()
            const min_label = __('Minimum VLAN ID').bold()  
            frappe.msgprint(__("{0} should be greater than {1}", [max_label, min_label]));
            frappe.validated = false;
        }
	},
});
