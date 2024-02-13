# Billing & Invoiec

- Keeps records of all the internal & external billings occured in the hospital, be it medicine, treatment fee etc
- Shows Detailed Analysis of the Income & Expenditure done by the hospital
- Generates Invoices for Patients & Medicine Stores for billing


## Properties

The following properties are being stored for each billing entry
- `date` - *The Date of Payment*
- `items` - *A JSON object of name of items purchased in the transaction mapped to their price*
- `source` - *The Source of Payment, (eg, Patient, Medicine Source, Electricity BIll etc)*
- `amount` - *The Total Amount paid on transaction*
- `cashier` - *The `cashier` who payed the `source` the required `amount` in the transaction*