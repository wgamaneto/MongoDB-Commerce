db.produtos
  .find({ }, { _id: 0, nome: true, vendidos: true })
  .sort({ vendidos: 1 });