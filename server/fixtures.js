Meteor.startup(function (){
	//setup admin user
	if (Meteor.users.findOne("SZx6E49ARqdutDCDF"))
		Roles.addUsersToRoles("SZx6E49ARqdutDCDF", ["admin"]);

	//add roles to Roles if they do not 
	if(!Meteor.roles.findOne({name: "admin"}))
		Roles.createRole("admin");
	if(!Meteor.roles.findOne({name: "owner"}))
		Roles.createRole("owner");
	if(!Meteor.roles.findOne({name: "user"}))
		Roles.createRole("user");
});