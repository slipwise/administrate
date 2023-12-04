$(function () {
  const selectizeFields = $(`
    .field-unit--belongs-to select,
    .field-unit--has-many select,
    .field-unit--polymorphic select
  `).selectize({});
  $(window).on("beforeunload", function () {
    selectizeFields.each((el) => el.selectize.destroy());
  });
});
