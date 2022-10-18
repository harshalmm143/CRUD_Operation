const User = require("./User")

exports.adduser = (req, res) => {

    const NewUser = new User({
        Name: req.body.Name,
        LastName: req.body.LastName,
        Age: req.body.Age,
        Gendar: req.body.Gendar,
        Email: req.body.Email,
        Mobile: req.body.Mobile,
        Address: req.body.Address,
        PinCode: req.body.PinCode,
        State: req.body.State,
        City: req.body.City
    })

    NewUser.save()
        .then((userData) => {
            res.status(200).json(userData)

        }).catch((err) => {
            res.status(500).send(err)
        });

}

exports.alluser = (req, res) => {
    User.find()
        .then((alluser) => {
            res.status(200).json(alluser)

        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.deleteuser = (req, res) => {
    User.findByIdAndDelete(req.params.UserId)
        .then((deleteuser) => {
            res.status(200).json(deleteuser)

        }).catch((err) => {
            res.status(500).send(err)
        });

}

exports.updateuser = (req, res) => {
    User.findByIdAndUpdate(req.params.UserId
        , {
            Name: req.body.Name,
            LastName: req.body.LastName,
            Age: req.body.Age,
            Gendar: req.body.Gendar,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            Address: req.body.Address,
            PinCode: req.body.PinCode,
            State: req.body.State,
            City: req.body.City
        }, { new: true })
        .then((updateuser) => {
            res.status(200).json(updateuser)

        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.userexist = (req, res) => {
    User.exists({
        Email: req.params.Email,
    })
        .then((User) => {
            if (User === null) {
                res.status(200).json({
                    message: "Not Register"
                })
            } else {
                res.status(200).json(User)
            }

        }).catch((err) => {
            res.status(500).send(err)

        });
}

exports.getuserbyid = (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
    .then((userdata) => {
        res.status(200).json(userdata)
        
    }).catch((err) => {
        res.status(500).send(err)
        
    });

}