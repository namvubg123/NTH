const Category = require("../model/category");
//const shortid = require("shortid");

function createCategories(categories, parentID = null) {
  const categoryList = [];
  let category;

  if (parentID == null) {
    category = categories.filter((cate) => cate.parentID == undefined);
  } else {
    category = categories.filter((cate) => cate.parentID == parentID);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      parentId: cate.parentId,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.createCategory = (req, res) => {
  const categoryObject = {
    name: req.body.name,
  };

  if (req.body.parentID) {
    categoryObject.parentID = req.body.parentID;
  }

  const cate = new Category(categoryObject);
  cate.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(200).json({ category });
    }
  });
};

exports.getCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      const categoryList = createCategories(categories);
      res.status(200).json({ categoryList });
    }
  });
};
exports.updateCategories = async (req, res) => {
  const { _id, name, parentId } = req.body;
  const updatedCategories = [];
  if (name instanceof Array) {
    for (let i = 0; i < name.length; i++) {
      const category = {
        name: name[i],
      };
      if (parentId[i] !== "") {
        category.parentId = parentId[i];
      }
      const updatedCategory = await Category.findOneAndUpdate(
        { _id: _id[i] },
        category,
        { new: true }
      );
      updatedCategories.push(updatedCategory);
    }
    return res.status(201).json({ updateCategories: updatedCategories });
  } else {
    const category = {
      name,
    };
    if (parentId !== "") {
      category.parentId = parentId;
    }
    const updatedCategory = await Category.findOneAndUpdate({ _id }, category, {
      new: true,
    });
    return res.status(201).json({ updatedCategory });
  }
};

exports.deleteCategories = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.findOneAndDelete({
      _id: categoryId,
    });
    if (deletedCategory) {
      res.status(201).json({ message: "Category removed" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
