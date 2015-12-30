function transform(model, _attrs){
  var entity = JSON.parse(model);
  var attrs = JSON.parse(_attrs);

  var vm = {};
  // Copy default attrs and override name/id
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      vm[key] = attrs[key];
    }
  }
  // Copy entity
  for (var key in entity) {
    if (entity.hasOwnProperty(key)) {
      vm[key] = entity[key];
    }
  }
  // If toc is not defined in model, read it from _attrs
  if (vm._tocPath && vm._tocPath.indexOf("~/") == 0) {
    vm._tocPath = vm._tocPath.substring(2);
  }
  if (vm._navPath === vm._tocPath){
    vm._allowToc = false;
  }else{
    vm._allowToc = true;
  }
  if (!vm.hasOwnProperty("_allowAffix")) {
    vm._allowAffix = true;
  } else {
    // parse from string to bool
    vm._allowAffix = vm._allowAffix === "true"
  }
  return vm;
}
