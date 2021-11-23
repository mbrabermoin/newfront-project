export default {
        "questions": [
          {
            "id": 40580,
            "form":"workers Compensation",
            "label": "Full Name",
            "hint":"",
            "ordering": "0001",
            "placeholder": "",
            "section": "PrimaryContact",
            "isRequired": true,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40581,
            "form":"workers Compensation",
            "label": "Role",
            "hint":"",
            "ordering": "0002",
            "placeholder": "",
            "section": "PrimaryContact",
            "isRequired": false,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40582,
            "form":"workers Compensation",
            "label": "Phone Number",
            "hint":"",
            "ordering": "0003",
            "placeholder": "placeholder",
            "section": "PrimaryContact",
            "isRequired": true,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40583,
            "form":"workers Compensation",
            "label": "Company Name",
            "hint":"",
            "ordering": "0004",
            "placeholder": "",
            "section": "Company",
            "isRequired": false,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40584,
            "form":"workers Compensation",
            "label": "What is your Federal Employer Identification Number?(FEIN)",
            "hint":"",
            "ordering": "0005",
            "placeholder": "",
            "section": "Company",
            "isRequired": true,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40585,
            "form":"workers Compensation",
            "label": "Years in business",
            "hint":"",
            "ordering": "0006",
            "placeholder": "",
            "section": "Company",
            "isRequired": false,
            "type": "number",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40586,
            "form":"workers Compensation",
            "label": "Number of locations",
            "hint":"",
            "ordering": "0007",
            "placeholder": "",
            "section": "Company",
            "isRequired": false,
            "type": "number",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40587,
            "form":"workers Compensation",
            "label": "In which states do you operate?",
            "hint":"",
            "ordering": "0008",
            "placeholder": "",
            "section": "Company",
            "isRequired": false,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{}
          },
          {
            "id": 40588,
            "form":"workers Compensation",
            "label": "What's the name of the clinic, physician, or ER used for work injuries?",
            "hint":"",
            "ordering": "0009",
            "placeholder": "",
            "section": "Employees",
            "isRequired": false,
            "type": "text",
            "options": [],
            "additionalOptions":[{
              "id":"check1",
              "label":"Do you provide group medical insurance?",
              "type":"checkbox"
            },{
              "id":"check2",
              "label":"Do you offer a retirement or pension plan?",
              "type":"checkbox"
            },{
              "id":"check3",
              "label":"Do you give paid vacation?",
              "type":"checkbox"
            }],
            "dependencies":{}
          },
          {
            "id": 40589,
            "form":"workers Compensation",
            "label": "Plese provide details about the paid vacation",
            "hint":"",
            "ordering": "0010",
            "placeholder": "",
            "section": "Employees",
            "isRequired": false,
            "type": "text",
            "options": [],
            "additionalOptions":[],
            "dependencies":{
              "questionId":40588,
              "additionalOptionId":"3"
            }
          }    ,
          {
            "id": 40590,
            "form":"workers Compensation",
            "label": "",
            "hint":"",
            "ordering": "0011",
            "placeholder": "",
            "section": "Policy",
            "isRequired": false,
            "type": "options",
            "options": [{
              "title":"I want to pay Newfront",
              "description":"You'll pay Newfront instead of paying each insurance company separately. There are no fees",
              "recommended":true
            },
            {
              "title":"I want to pay the insurance company directly",
              "description":"You'll receive bills from the insurance company and it will be your responsability to make sure they are paid to keep the coverage.",
              "recommended":false
            }],
            "additionalOptions":[],
            "dependencies":{}
          }
        ]
      }   