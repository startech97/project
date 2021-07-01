import {JetView} from "webix-jet";
console.log('ert')
export default class LayoutView extends JetView {
	
    config(){
        return {
            rows:[{
				view:"form", elements:[
					{
					  view:"radio",
					  label:"в каком году был основан санкт-петербург",
					  labelPosition:"top",
					  options:[
						{ id:"1", value:"1705" }, 
						{ id:"2", value:"1706" }, 
						{ id:"3", value:"1703" },
						{ id:"4", value:"1701" }
					  ],
					}
				  ]
				},
				{ view:"button", value:"Finish",width:100, click: () => {
					this.show("./start");
				}}
				
            ]
        };
    }
}