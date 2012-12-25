
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.mon = function(req, res){
  res.render('dstat', { title: 'Live output from command dstat' });
};
