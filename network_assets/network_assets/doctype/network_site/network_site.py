# Copyright (c) 2024, Hybrowlabs Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class NetworkSite(Document):
	def before_save(self):
		line1, line2, city, state = frappe.db.get_value('Address', self.site_address, ['address_line1', 'address_line2', 'city', 'state'])
		self.title = line1 + ", " + line2 +", "+ city + ", "+ state