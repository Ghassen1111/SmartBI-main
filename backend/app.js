///**************Inportation des module **************************/
//import express module
const express = require('express');
//inport bady-parser module/
const bodyParser = require('body-parser');
//inport mongoose module/install
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//inport bcrypt module/install
const bcrypt = require('bcrypt');
//inport multer module//img/install
const multer = require('multer');
//inport path module
const path = require('path');
//inport axios//weather
const axios = require('axios');
// team api
var request = require('request');
// L'importation du token
const jwt = require("jsonwebtoken");
//impoet objectId
const { ObjectId } = require("mongodb");
//connect app to juilletDB
mongoose.connect('mongodb://localhost:27017/SmartBI');
///**************Creation de l'application **************************/
// create express application
const app = express();
///**************Configuration de l'application **************************/
//configure app by BodyParser to send Response (json)
app.use(bodyParser.json());
//configure app by BodyParser to parse object 
app.use(bodyParser.urlencoded({ extended: true }))
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//images path configuration
app.use('/images', express.static(path.join('backend/images')))
//mine types {only images}/fourma de ficher typle de media
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/svg': 'svg',

}
// destination de image
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-SmartBI-' + '.' +
      extension;
    cb(null, imgName);
  }
});
///**************Inportation des modules **************************/
const User = require("./models/user");
const Message = require("./models/message");
const Category = require("./models/category");
const Product = require("./models/product");
const Commande = require("./models/commande");
const Facture = require("./models/facture");
const Tache = require("./models/tache");
const Reclamation = require("./models/reclamation");
///**************Exportation de l'application **************************/
///////////////////////signup//////////////////////////////////////////////
/////////////////users entreprise //////////////////////////////////////////////
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("here into add", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
      const url = req.protocol + '://' + req.get('host');
      console.log('here file, ', req.file);
      let user = new User({
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        tel: req.body.tel,
        sexe:req.body.sexe,
        email: req.body.email,
        pwd: cryptedPwd,
        contrats:req.body.contrats,
        salaire:req.body.salaire,
        category:req.body.category,
        post:req.body.post,
        country: req.body.country,
        nameEntreprise:req.body.nameEntreprise,
        entrepriseId:req.body.entrepriseId,
        employeurId:req.body.employeurId,
        status:req.body.status,
        role: req.body.role,
        avatar: url + "/images/" + req.file.filename
      });
      user.save((err, doc) => {
        console.log(err);
        if (err) {
          res.json({ message: "Email exsist" });
        }
        else {
          res.json({ message: "user added with succes" });
        }
      })
    })
  });
  /////////////////////////////////login//////////////////////////////
app.post("/users/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email,status:'yes'}).then(user => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed no such user"
      })
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.pwd, user.pwd);
  }).then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Auth failed inccorect password"
      })
    }
    const token = jwt.sign(
      {
        email: fetchedUser.email,
        userId: fetchedUser._id,
        userRole: fetchedUser.userRole ,
        avatar:fetchedUser.avatar,
        name:fetchedUser.name,
        nameEntreprise:fetchedUser.nameEntreprise,
        entrepriseId:fetchedUser.entrepriseId,
        employeurId:fetchedUser.employeurId,
        category:fetchedUser.category,
      },
      "secret_this_should_be_longer",
      { expiresIn: "30min" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 60000,
      userId: fetchedUser._id,
      avatar:fetchedUser.avatar,
      name:fetchedUser.name,
      nameEntreprise:fetchedUser.nameEntreprise,
      entrepriseId:fetchedUser.entrepriseId,
      employeurId:fetchedUser.employeurId,
      userRole: fetchedUser.role,
      category:fetchedUser.category,
    });
    console.log('here role', fetchedUser.role);
  })
    .catch(e => {
      console.log(e)
    })
})
//////////////// profile ////////////////////
app.get("/users/:id", (req, res) => {
  console.log("here into get profile");
  User.findOne({_id: req.params.id}).then((docs) => {
    res.json({ user: docs });
  });
});
//edit user by id 
app.put("/users/user/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  User.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//edit Status user by id 
app.put("/users/status/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  User.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//edit category user by id 
app.put("/users/category/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  User.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//delet user et entreprise by id
app.delete("/users/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  User.deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
/////add message
app.post("/users/message", (req, res) => {
  console.log("here into add", req.body);
  let message = new Message({
    message: req.body.message,
    myId: req.body.myId,
    yourId: req.body.yourId,
    date:req.body.date
  });
  message.save((err, doc) => {
    if (err) {
      res.json({ message: "problem" });
    }
    else {
      res.json({ message: "message added with succes" });
    }
  })
});
// message Tab
// get all message
app.get("/users/message/:myId/:yourId", (req, res) => {
  console.log("here into get all userMassenger");
  Message.find().then((docs) => {
    res.json({ x: docs });
  });
});
// userMassenger Tab
// get all userMassenger
app.get("/users/userMassenger/:id/:myId", (req, res) => {
  console.log("here into get all userMassenger");
  User.find().then((docs) => {
    res.json({ x: docs });
  });
});
/////add category///////
app.post("/category", (req, res) => {
  console.log("here into add", req.body);
  let category = new Category({
    entrepriseId:req.body.entrepriseId,
    category: req.body.category
  });
  category.save((err, doc) => {
    if (err) {
      res.json({ message: "problem" });
    }
    else {
      res.json({ message: "message added with succes" });
    }
  })
});
// get all category
app.get("/category/:entrepriseId", (req, res) => {
  console.log("here into get all category");
  Category.find({ entrepriseId:req.params.entrepriseId }).then((docs) => {
    res.json({ x: docs });
  });
});
//delet category by id
app.delete("/category/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  Category.deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
///////product action/////
// get store
app.get("/product/store/:id", (req, res) => {
  console.log("here into get all store");
  Product.find({entrepriseId:req.params.id,status:"yes"}).then((docs) => {
    res.json({ x: docs });
  });
});
//display product
app.get("/product/display/:id", (req, res) => {
  console.log("here into get product");
  Product.findOne({_id: req.params.id}).then((docs) => {
    res.json({ product: docs });
  });
});
//edit product by id 
app.put("/product/product/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  Product.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//edit Status product by id 
app.put("/product/status/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  Product.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//edit qty product by id 
app.put("/product/editQty/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  Product.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//delet product by id
app.delete("/product/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  Product.deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
//////////commande action////////
//edit Status commande by id 
app.put("/commande/status/:id", (req, res) => {
  console.log("here into edit matches body", req.body);
  Commande.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//delet commande by id
app.delete("/commande/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  Commande.deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
///////////////facture action///////
//get factures Tab
//for entreprise and finace
app.get("/facture/factures/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Facture.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ factures: T});
        console.log(T);
      }
     
    )
    
})
//display facture
app.get("/facture/display/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Facture.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "employeurId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "employeur", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "entrepriseId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "entreprise", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i]._id==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ facture: T});
        console.log(T);
      }
     
    )
    
})
//////action tache//////
//edit Status tache by id 
app.put("/tache/status/:id", (req, res) => {
  console.log("here into edit status body", req.body);
  Tache.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//delet tache by id
app.delete("/tache/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  Tache .deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
//////////////tache//////
//add tache
app.post("/tache", (req, res) => {
  console.log("here into add", req.body);
  let tache = new Tache({
    yourId:ObjectId(req.body.yourId),
    myId:ObjectId(req.body.myId),
    tache: req.body.tache,
    date:req.body.date,
    status: req.body.status
  });
  tache.save((err, doc) => {
    if (err) {
      res.json({ message: "problem" });
    }
    else {
      res.json({ message: "message added with succes" });
    }
  })
});
//get my add tache
// my tache Tab
app.get("/tache/getMyAddTache/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Tache.aggregate(
      
      [
        {
          $lookup: {
            from: "users", // collection to join
            localField: "yourId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "your", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].myId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ taches: T});
        console.log(T);
      }
     
    )
    
})
// Taches Tab
// get all Taches
app.get("/tache/taches/:id", (req, res) => {
  console.log("here into get all taches");
  Tache.find({yourId:req.params.id}).then((docs) => {
    res.json({ taches: docs });
  });
});
/////////////action reclamation//////////
//edit Status reclamation by id 
app.put("/reclamation/status/:id", (req, res) => {
  console.log("here into edit status body", req.body);
  Reclamation.updateOne({ _id: req.body._id }, req.body).then((Response) => {
    (Response) => {
      console.log("respose after update", Response);
      if (Response.nModified == 1) {
        res.json({ message: "edit with success" });

      }
    }
  })
});
//delet reclamation by id
app.delete("/reclamation/:id", (req, res) => {
  console.log("here into delet", req.params.id);
  Reclamation.deleteOne({ _id: req.params.id }).then((Response) => {
    console.log("here response form BD", Response);
    if (Response.deletedCount == 1) {
      res.json({ message: "delet with success" })
    }
  })
});
///////////////////////////////////admin/////////////////////////////////
// entreprise Tab
// get all entreprise
app.get("/admin/entreprise", (req, res) => {
  console.log("here into get all entreprise");
  User.find({role:"entreprise"}).then((docs) => {
    res.json({ entreprise: docs });
  });
});
//users Tab
// get all users
app.get("/admin/users", (req, res) => {
  console.log("here into get all users");
  User.find({role:{$nin: ["entreprise", "Admin"]}}).then((docs) => {
    res.json({ users: docs });
  });
});
////////////////////////////////////entreprise//////////////////////
// responsables Tab
// get all respensables
app.get("/entreprise/respensables/:id", (req, res) => {
  console.log("here into get all respensables");
  User.find({entrepriseId:req.params.id,post:"responsable"}).then((docs) => {
    res.json({ respensables: docs });
  });
});
// employeurs Tab
// get all employeurs
app.get("/entreprise/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,post:"employeur"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});
// fournisseurs-tab
// get all fournisseurs
app.get("/entreprise/fournisseurs/:id", (req, res) => {
  console.log("here into get all fournisseurs");
  User.find({entrepriseId:req.params.id,role:"fournisseur"}).then((docs) => {
    res.json({ fournisseurs: docs });
  });
});
//products-tab
// get products by Id entrepsie
app.get("/entreprise/products/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Product.aggregate(
      
      [
        {
          $lookup: {
            from: "users", // collection to join
            localField: "employeurId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "employeur", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ products: T});
        console.log(T);
      }
     
    )
    
})
////////////////////////////responsable ressources humaines (Rrh)/////////////////
// employeur Tab
// get all employeur
app.get("/Rrh/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,post:"employeur"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});

////////////////////////////responsable logistique (rL)/////////////////
// employeurs-tab-rl
// get all employeurs
app.get("/rl/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,role:"employeur logistique"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});
//products-tab
// get products by Id entrepsie
app.get("/rl/products/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Product.aggregate(
      
      [
        {
          $lookup: {
            from: "users", // collection to join
            localField: "employeurId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "employeur", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ products: T});
        console.log(T);
      }
     
    )
    
})
///////////////////////////responsable commercial (rc)///////////////////
// employeurs-tab-rc
// get all employeurs
app.get("/rc/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,role:"employeur commercial"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});
// fournisseur-tab-rc
// get all fournisseurs
app.get("/rc/fournisseurs/:id", (req, res) => {
  console.log("here into get all fournisseurs");
  User.find({entrepriseId:req.params.id,role:"fournisseur"}).then((docs) => {
    res.json({ fournisseurs: docs });
  });
});
// commande-tab-rc
// get all commandes
app.get("/rc/commandes/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Commande.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "employeurId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "employeur", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ commandes: T});
        console.log(T);
      }
     
    )
    
})
///////////////////////////responsable financier (rf)///////////////////
// employeurs-tab-rf
// get all employeurs
app.get("/rf/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,role:"employeur financier"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});
// reclamation-tab-rf
// get all reclamations
app.get("/rf/reclamations/:id", (req, res)=> {
  console.log("here id ",req.params.id);
  Reclamation.aggregate(
      
      [
        {
          $lookup: {
            from: "factures", // collection to join
            localField: "factureId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "facture", // output array field
          },
        },
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ reclamations: T});
        console.log(T);
      }
     
    )
    
})
//////////////////////////responsable technique (rt)///////////////////
// employeurs-tab-rt
// get all employeurs
app.get("/rt/employeurs/:id", (req, res) => {
  console.log("here into get all employeurs");
  User.find({entrepriseId:req.params.id,role:"employeur technique"}).then((docs) => {
    res.json({ employeurs: docs });
  });
});
// reclamation-tab-rt
// get all reclamations
app.get("/rt/reclamations/:id", (req, res)=> {
  console.log("here id ",req.params.id);
  Reclamation.aggregate(
      
      [
        {
          $lookup: {
            from: "factures", // collection to join
            localField: "factureId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "facture", // output array field
          },
        },
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].entrepriseId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ reclamations: T});
        console.log(T);
      }
     
    )
    
})
////////////////////////////employeur logistique (EL)/////////////////
// add product
app.post("/product", multer({ storage: storage }).single('img'), (req, res) => {
  console.log("here into add", req.body);
  const url = req.protocol + '://' + req.get('host');
  let product = new Product({
    name: req.body.name,
    qty: req.body.qty,
    prixReal: req.body.prixReal,
    prix: req.body.prix,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    employeurId:ObjectId(req.body.employeurId),
    entrepriseId: req.body.entrepriseId,
    status:req.body.status,
    avatar: url + "/images/" + req.file.filename,
  });
  product.save((err, doc) => {
    if (err) {
      res.json({ message: "problem" });
    }
    else {
      res.json({ message: "product added with succes" });
    }
  })
});
// product-tab-el
// get all products
app.get("/el/products/:id", (req, res) => {
  console.log("here into get all products");
  Product.find({employeurId:req.params.id}).then((docs) => {
    res.json({ products: docs });
  });
});
///////////////////////////employeur commercial (Ec)///////////////////
// fournisseur-tab-ec
// get all fournisseurs
app.get("/ec/fournisseurs/:id", (req, res) => {
  console.log("here into get all fournisseurs");
  User.find({employeurId:req.params.id,role:"fournisseur"}).then((docs) => {
    res.json({ fournisseurs: docs });
  });
});
// commande-tab-ec
// get all commandes
app.get("/ec/commandes/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Commande.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].employeurId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ commandes: T});
        console.log(T);
      }
     
    )
    
})
///////////////////////////employeur financier (Ef)///////////////////

//////////////////////////employeur technique (Et)///////////////////
// reclamation-tab-et
// get all reclamations
app.get("/et/reclamations/:id/:category", (req, res)=> {
  console.log("here id ",req.params.id);
  console.log("here category ",req.params.category);
  Reclamation.aggregate(
      
      [
        {
          $lookup: {
            from: "factures", // collection to join
            localField: "factureId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "facture", // output array field
          },
        },
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if ((docs[i].entrepriseId==req.params.id)&&(docs[i].probleme==req.params.category)){
            T.push(docs[i])
          }
        }
        res.status(200).json({ reclamations: T});
        console.log(T);
      }
     
    )
    
})
///////////////////////////Clinet////////////////////////////////////
//add commande client
app.post("/commande", (req, res) => {
  console.log(req.body);
    let commande = new Commande({
        productId:ObjectId(req.body.productId),
        clientId:ObjectId(req.body.clientId),
        employeurId:ObjectId(req.body.employeurId),
        entrepriseId:ObjectId(req.body.entrepriseId),
        qty: req.body.qty,
        status:req.body.status
    });
  
    commande.save((err, doc) => {
        if (err) {
  
            res.json({ message: "problem" })
        } else {
  
            res.json({ message: "add widh success" });
        }
  
  
    });
  })
// commande-tab-clinet
// get all commandes
app.get("/clinet/commandes/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Commande.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].clientId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ commandes: T});
        console.log(T);
      }
     
    )
    
})
// payment-commande
// get commande for payment
app.get("/commande/commandeForPayment/:id", (req, res)=> {
  console.log("here id ",req.params.id);
    Commande.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "clinet", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "employeurId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "employeur", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "entrepriseId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "entreprise", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i]._id==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ commande: T});
        console.log(T);
      }
     
    )
    
})
//add facture client
app.post("/facture", (req, res) => {
  console.log(req.body);
    let facture = new Facture({
        productId:ObjectId(req.body.productId),
        clientId:ObjectId(req.body.clientId),
        employeurId:ObjectId(req.body.employeurId),
        entrepriseId:ObjectId(req.body.entrepriseId),
        qty: req.body.qty,
        TVA: req.body.TVA,
        totalPrix: req.body.totalPrix,
        cardNumber: req.body.cardNumber,
        dateCard: req.body.dateCard,
        cvvCode: req.body.cvvCode,
        methodPayment: req.body.methodPayment,
        date: req.body.date,
    });
  
    facture.save((err, doc) => {
        if (err) {
  
            res.json({ message: "problem" })
        } else {
  
            res.json({ message: "add widh success" });
        }
  
  
    });
  })
  // factures-tab-clinet
// get all factures
app.get("/clinet/factures/:id", (req, res)=> {
  console.log("here id ",req.params.id);
  Facture.aggregate(
      
      [
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].clientId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ factures: T});
        console.log(T);
      }
     
    )
    
})
//add reclamation client
app.post("/reclamation", (req, res) => {
  console.log("here into add", req.body);
  let reclamation = new Reclamation({
    factureId:ObjectId(req.body.factureId),
    productId:ObjectId(req.body.productId),
    clientId:ObjectId(req.body.clientId),
    entrepriseId:req.body.entrepriseId,
    probleme:req.body.probleme,
    qty:req.body.qty,
    text:req.body.text,
    status: req.body.status
  });
  reclamation.save((err, doc) => {
    if (err) {
      res.json({ message: "problem" });
    }
    else {
      res.json({ message: "message added with succes" });
    }
  })
});
// reclamation-tab-clinet
// get all reclamations
app.get("/clinet/reclamations/:id", (req, res)=> {
  console.log("here id ",req.params.id);
  Reclamation.aggregate(
      
      [
        {
          $lookup: {
            from: "factures", // collection to join
            localField: "factureId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "facture", // output array field
          },
        },
        {
          $lookup: {
            from: "products", // collection to join
            localField: "productId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "product", // output array field
          },
        },
      ],

      (error, docs) => {
        let T=[];
        for (let i = 0; i < docs.length; i++) {
          if (docs[i].clientId==req.params.id){
            T.push(docs[i])
          }
        }
        res.status(200).json({ reclamations: T});
        console.log(T);
      }
     
    )
    
})
// app imprtable form another files 
module.exports = app;