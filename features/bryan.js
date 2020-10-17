module.exports = function(controller) {
    const bryansResume = {
                    "basics": {
                        "name": "Bryan Linda",
                        "label": "Software Engineer",
                        "picture": "",
                        "email": "blindaa121@gmail.com",
                        "phone": "(510)306-8879",
                        "website": "http://bryanlinda.com",
                        "summary": "A summary of Bryan Linda...",
                        "location": {
                            "address": "750 React Lane",
                            "postalCode": "CA 94115",
                            "city": "San Francisco",
                            "countryCode": "US",
                            "region": "California"
                            },
                        "profiles": [{
                            "network": "LinkedIn",
                            "username": "Bryan Linda",
                            "url": "http://linkedin.com/in/bryan-linda"
                            },
                            {
                            "network": "GitHub",
                            "username": "blindaa121",
                            "url": "http://github.com/blindaa121"
                            },
                            {
                            "network": "AngelList",
                            "username": "Bryan Linda",
                            "url": "http://angellist.com/blindaa121"
                            }]
                    },
                    "work": [{
                        "company": "Verizon",
                        "position": "Lead Sales Consultant",
                        "startDate": "2013-01-01",
                        "endDate": "2014-01-01",
                        "summary": "Description..."
                    },{
                        "company": "ClickAway",
                        "position": "Mobile Device Technician",
                        "startDate": "2013-01-01",
                        "endDate": "2014-01-01",
                        "summary": "Description..."
                    }],
                    "education": [{
                        "institution": "App Academy",
                        "area": "Software Development",
                        "studyType": "Certificate",
                        "startDate": "2020-02-10",
                        "endDate": "2020-05-29"
                    },
                    {
                        "institution": "San Jose State University",
                        "area": "Industrial & Systems Engineering",
                        "studyType": "Bachelors of Science",
                        "startDate": "2017-08-10",
                        "endDate": "2019-12-17"
                    },
                    {
                        "institution": "San Jose City College",
                        "area": "Mathematics",
                        "studyType": "Associates of Science",
                        "startDate": "2015-08-10",
                        "endDate": "2017-05-29"
                    }],
                    "projects": [{
                        "name": "HEAT",
                        "publisher": "Company",
                        "releaseDate": "2014-10-01",
                        "website": "http://publication.com",
                        "summary": "Description..."
                    },
                    {
                        "name": "iType",
                        "publisher": "Company",
                        "releaseDate": "2014-10-01",
                        "website": "http://publication.com",
                        "summary": "Description..."
                    },
                    {
                        "name": "huddleUP",
                        "publisher": "Company",
                        "releaseDate": "2014-10-01",
                        "website": "http://publication.com",
                        "summary": "Description..."
                    }],
                    "techStack": [{
                        "name": "Web Development",
                        "level": "Master",
                        "keywords": [
                        "HTML",
                        "CSS",
                        "Javascript"
                        ]
                    }],
                    "languages": [{
                        "language": "English",
                        "fluency": "Native speaker"
                    }],
                    "interests": [{
                        "name": "Wildlife",
                        "keywords": [
                        "Ferrets",
                        "Unicorns"
                        ]
                    }],
                };
                
    const bryansWork = bryansResume.work.map(job => (
        {
            title: job.company,
            payload: job.company
        }
    ));

    const bryansEducation = bryansResume.education.map(school => (
        {
            title: school.institution,
            payload: school.institution
        }
    ))

    const bryansTechStack = bryansResume.techStack.map(tech => (
        {
            title: tech.name,
            payload: tech.name
        }
    ))

    controller.hears('Bryan', 'message,direct_message',
        async(bot, message) => {
            await bot.reply(message, 
                {
                    text: "Great pick! What would like to know about Bryan?",
                    quick_replies: [
                        {
                            title: 'Work Experience',
                            payload: 'What work experience do you have?'
                        },
                        {
                            title: 'Education',
                            payload: 'Education'
                        },
                        {
                            title: 'Tech Stack',
                            payload: 'Tech Stack'
                        },
                        {
                            title: 'Contact Information',
                            payload: 'Contact Information'
                        },
                    ]
                });
    });

    controller.hears('work experience', 'message,direct_message',
        async(bot, message) => {
            await bot.reply(message,
                {
                    text: "My professional work experience ranges from customer service, sales, and mobile device repairs.",
                    quick_replies: bryansWork
                });
    });

    controller.hears('education', 'message,direct_message',
        async(bot, message) => {
            await bot.reply(message, 
                {
                    text: 'Here is a list of schools that I have studied at',
                    quick_replies: bryansEducation
                })
        }
    )
}


