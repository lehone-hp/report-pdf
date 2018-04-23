$(document).ready(function () {
  $('#printButton').on('click', function () {
    console.log("Printing report...")
    $("#printReport").print({
      globalStyles: true,
      mediaPrint: false,
      stylesheet: null,
      noPrintSelector: ".no-print",
      iframe: true,
      append: null,
      prepend: null,
      manuallyCopyFormValues: true,
      deferred: $.Deferred(),
      timeout: 750,
      title: null,
      doctype: '<!doctype html>'
    });
    console.log("Printed")
  });
});
