module.exports = function (controller) {
    const doriansResume = {
        "basics": {
            "name": "Dorian Izaiah Brown",
            "label": "Software Engineer",
            "picture": "",
            "email": "devorian143@gmail.com",
            "phone": "(707)718-7566",
            "website": "https://dbsaiyan1321.github.io/portfolio-site/",
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
                "username": "Dorian Izaiah Brown",
                "url": "https://www.linkedin.com/in/dorian-izaiah-brown-1430b3193/"
            },
            {
                "network": "GitHub",
                "username": "DBsaiyan1321",
                "url": "https://github.com/DBsaiyan1321"
            },
            {
                "network": "AngelList",
                "username": "Dorian Izaiah Brown",
                "url": "https://angel.co/u/dorian-izaiah-brown"
            }]
        },
        "work": [{
            "company": "Cold Stone",
            "position": "Team Member",
            "startDate": "December 2019",
            "endDate": "January 2020",
            "summary": "Description..."
        }, {
            "company": "UPS",
            "position": "Seasonal Driver Helper",
            "startDate": "December 2019",
                "endDate": "December 2019",
            "summary": "Description..."
        }, {
            "company": "Target",
            "position": "Seasonal Inbound Expert / Remodel Team",
            "startDate": "June 2019",
            "endDate": "August 2019",
            "summary": "Description..."
        }],
        "education": [{
            "institution": "App Academy",
            "area": "Full Stack Web Development",
            "studyType": "Certificate",
            "startDate": "February 10, 2020",
            "endDate": "May 29, 2020"
        },
        {
            "institution": "California State University, Northridge",
            "area": "Computer Science",
            "studyType": "Bachelor's of Science",
            "startDate": "August 2018",
            "endDate": "December 2019"
        }],
        "projects": [{
            "name": "Eckspence Traccerr",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
        },{
            "name": "Smeargle's Heart",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
        },
        {
            "name": "Blade Boy",
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
        "interests": [{
            "name": "Wildlife",
            "keywords": [
                "Ferrets",
                "Unicorns"
            ]
        }],
    };

    const doriansWork = doriansResume.work.map(job => (
        {
            title: job.company,
            payload: job.company
        }
    ));

    const doriansEducation = doriansResume.education.map(school => (
        {
            title: school.institution,
            payload: school.institution
        }
    ))

    const doriansTechStack = doriansResume.techStack.map(tech => (
        {
            title: tech.name,
            payload: tech.name
        }
    ))

    const doriansContactInfo = {
        email: doriansResume.basics.email,
        phone: doriansResume.basics.phone
    }

    controller.hears('Dorian', 'message,direct_message',
        async (bot, message) => {
            await bot.reply(message,
                {
                    text: "Great pick! What would like to know about Dorian?",
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
                            title: 'Projects',
                            payload: 'Projects'
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

    controller.hears(['work', 'experience'], 'message,direct_message',
        async (bot, message) => {
            await bot.reply(message,
                {
                    text: "My professional work experience ranges from customer service, sales, and mobile device repairs.",
                    quick_replies: doriansWork
                });
        });

    controller.hears('education', 'message,direct_message',
        async (bot, message) => {
            await bot.reply(message,
                {
                    text: 'Here is a list of schools that I have studied at',
                    quick_replies: doriansEducation
                })
        }
    )

    controller.hears('contact', 'message,direct_message',
        async (bot, message) => {
            await bot.reply(message,
                {
                    text: 'Feel free to contact me via phone, email, or online profiles!',
                    quick_replies: [
                        {
                            title: 'Phone',
                            payload: 'phone'
                        },
                        {
                            title: 'Email',
                            payload: 'email'
                        },
                        {
                            title: 'LinkedIn',
                            payload: 'LinkedIn'
                        },
                        {
                            title: 'GitHub',
                            payload: 'GitHub'
                        },
                        {
                            title: 'AngelList',
                            payload: 'AngelList'
                        }
                    ]
                })
        }
    )
}
