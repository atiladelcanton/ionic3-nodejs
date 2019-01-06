'use strict'

require('../models/product-model');

const repository = require('../repositories/product-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();

function productController() {

}

productController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

productController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

productController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Titulo Obrigatório');
    _validationContract.isRequired(req.body.description, 'Descrição Obrigatória');
    _validationContract.isRequired(req.body.price, 'Valor Obrigatório');
    if (req.body.price) {
        _validationContract.isTrue(req.body.price == 0, 'O preço do produto deve ser maior que Zero');
    }
    ctrlBase.post(_repo, _validationContract, req, res);
};

productController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.name, 'Titulo Obrigatório');
    _validationContract.isRequired(req.body.description, 'Descrição Obrigatória');
    _validationContract.isRequired(req.body.price, 'Valor Obrigatório');

    ctrlBase.post(_repo, _validationContract, req, res);
};

productController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = productController;