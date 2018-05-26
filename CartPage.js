//USEUNIT PageObjectRepo
//USEUNIT GenericFunctions
var PageObjects = require("PageObjectRepo");


function VerifyCart()
{

  //Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(154, 32);
  browser = Aliases.browser;
  Cart = page.FindChild(Array("ObjectIdentifier","ObjectType"), Array("cart_32_png","Image"), 30);
  Cart.Click();
  aqUtils.Delay("2000");
  Car_initial = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Car Initial/number"), 30);
  aqObject.CheckProperty(Car_initial,"contentText", cmpContains, "Car Initial/number", false);

    Releases = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Releases"), 30);
  aqObject.CheckProperty(Releases,"contentText", cmpContains, "Releases", false);
    Switches = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Switches"), 30);
  aqObject.CheckProperty(Switches,"contentText", cmpContains, "Switches", false);
    Car_Kind = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Car Kind"), 30);
  aqObject.CheckProperty(Car_Kind,"contentText", cmpContains, "Commodity", false);
    Commodity = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Commodity"), 30);
  aqObject.CheckProperty(Commodity,"contentText", cmpContains, "Commodity", false);
      Track = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Track"), 30);
  aqObject.CheckProperty(Track,"contentText", cmpContains, "Track", false);
      Spot = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Spot"), 30);
  aqObject.CheckProperty(Spot,"contentText", cmpContains, "Spot", false);
      Action = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Action"), 30);
  aqObject.CheckProperty(Action,"contentText", cmpContains, "Action", false);
      Pick_Up_Date = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Pick Up Date"), 30);
  aqObject.CheckProperty(Pick_Up_Date,"contentText", cmpContains, "Pick Up Date", false);
   Rate = page.FindChild(Array("ObjectType","contentText"), Array("Cell","Rate"), 30);
  aqObject.CheckProperty(Rate,"contentText", cmpContains, "Rate", false);
    Clear_cart = page.FindChild(Array("ObjectType","contentText"), Array("Link","Clear cart"), 30);
  aqObject.CheckProperty(Clear_cart,"contentText", cmpContains, "Clear cart", false);
  Submit = page.FindChild(Array("ObjectType","contentText"), Array("Link","Submit"), 30);
  aqObject.CheckProperty(Submit,"contentText", cmpContains, "Submit", false);
  }

  function clearCart(){
  var result;
  var page = Sys.Browser("*").Page("*");
  var ClearCart_Button = page.FindChild(PageObjects.ClearCart_Button_Prop,PageObjects.ClearCart_Button_Val,10);
  try{
   //ClearCart_Button.scrollIntoView(false);
//   Sys.Keys("[PageDown]");
//Sys.Keys("[PageDown]");
//Sys.Keys("[PageDown]");
//Sys.Keys("[PageDown]");
//Sys.Keys("[PageDown]");
//Sys.Keys("[PageDown]");
  ClearCart_Button.Click();
  result = true;
  GenericFunctions.CustomLog("clearCart successful","","Passed");
  
  }catch(e){
  result = false;
  GenericFunctions.CustomLog("clearCart Unsuccessful","","Failed");
  }finally{
  Log.Message(result);
  
  
  }
  }


function verifyDateselector(){

var increment = 2;
var result1 = false;
try{
let page = Sys.Browser("*").Page("*");
var car1 = Sys.Browser("*").Page("*").Panel("wrapper").Panel(6).Panel(1).Panel(0).Panel(0).Panel(2).Panel(1).Label(0).Checkbox(0);
car1.Click();
var car2 = Sys.Browser("*").Page("*").Panel("wrapper").Panel(6).Panel(1).Panel(0).Panel(0).Panel(5).Panel(1).Label(0).Checkbox(0);
car2.Click();
var car3 = Sys.Browser("*").Page("*").Panel("wrapper").Panel(6).Panel(1).Panel(0).Panel(0).Panel(8).Panel(1).Label(0).Checkbox(0);
car3.Click();
var car4 = Sys.Browser("*").Page("*").Panel("wrapper").Panel(6).Panel(1).Panel(0).Panel(0).Panel(11).Panel(1).Label(0).Checkbox(0);
car4.Click();
//var car5 = Sys.Browser("*").Page("*").Panel("wrapper").Panel(6).Panel(1).Panel(0).Panel(0).Panel(14).Panel(1).Label(0).Checkbox(0);
//car5.Click();
var selectAction = page.FindChild(PageObjectRepo.Selectaction_Obj_Prop,PageObjectRepo.Selectaction_Obj_Val,10);
selectAction.ClickItem("Release");
var goToCart = page.FindChild(PageObjectRepo.goToCart_button_Prop,PageObjectRepo.goToCart_button_Val,10);
Delay(3000);
goToCart.Click();
Delay(3000);
var countObj = page.FindChildByXPath(PageObjectRepo.Count_Obj_xpath);
var count = GetDataFromString(countObj.contentText);

for (var i=0;i<count;i++){

var Cal_change = Sys.Browser("chrome").Page("https://rmtdv.bnsf.com/cart").Panel("wrapper").Panel(4).Panel(0).Panel(1).Panel(0).Panel(increment).Panel(7).Panel(0).Panel(0);

Cal_change.Panel(0).Panel(0).Button(1).Click();

Cal_change.Panel(1).Table(1).Cell(5, 6).Click();
var result = Cal_change.Panel(0).Textbox(0).Text;
if(result == "11/06/2017"){
GenericFunctions.CustomLog("Verify date selector successful","","Passed");
result1 = true;
}
aqUtils.Delay(1000);
increment = increment+3;

}
ClearCart = page.FindChild(PageObjectRepo.ClearCart_Button_Prop,PageObjectRepo.ClearCart_Button_Val,10);
ClearCart.Click();
CloseCart = page.FindChild(PageObjectRepo.closeCart_Button_Prop,PageObjectRepo.closeCart_Button_Val,10);
CloseCart.Click();
Delay(4000);
}catch(e){
GenericFunctions.CustomLog("Verify date selector successful","","Failed");
}finally{
return result1;

}

}

function GetDataFromString(input)
{
     var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(input);
    return matches[1];
}
function Test(){
//Log.Message(GetDataFromString("Releases[3]"));
Log.Message(GetNumberInString("0 selected / 41 total"));


}
