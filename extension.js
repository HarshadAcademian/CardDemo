module.exports = {
    name: 'GetStudentData',
    publisher: 'Sample',
    cards: [{
        type: 'GetStudentDataCard',
        source: './src/cards/GetStudentDataCard',
        title: 'GetStudentData Card',
        displayCardType: 'GetStudentData Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        // pageRoute: {
        //     route: '/',
        //     excludeClickSelectors: ['a']
        // }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};