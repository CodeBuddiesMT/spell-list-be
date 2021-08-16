var Account = require("../models/account.model");

// Display list of all Accounts.
exports.account_list = function (req, res) {
  // res.send("NOT IMPLEMENTED: Account list");
  Account.find({}, "name")
    .populate("name")
    .exec(function (err, list_accounts) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("Account_list", { title: "Account List", account_list: list_accounts });
    });
};

// Display detail page for a specific Account.
exports.account_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Account detail: " + req.params.id);
};

// Display Account create form on GET.
exports.account_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Account create GET");
};

// Handle Account create on POST.
exports.account_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Account create POST");
};

// Display Account delete form on GET.
exports.account_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Account delete GET");
};

// Handle Account delete on POST.
exports.account_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Account delete POST");
};

// Display Account update form on GET.
exports.account_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Account update GET");
};

// Handle account update on POST.
exports.account_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Account update POST");
};
