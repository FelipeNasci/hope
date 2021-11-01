const Authentication = async (account, tokenGenerator) => {
    account.token = tokenGenerator(account.id);
    return account
}

module.exports = Authentication