const SignUpUser = async (userModel, repositoryInstance) => {

    const { email } = userModel;
    const existUser = await repositoryInstance.read({ email });

    if (existUser)
        throw new Error({ source: 'controller - singUp', message: userAlreadyExist });

    const user = await repositoryInstance.create(userModel);

    return UserModel(user);
}

module.exports = SignUpUser