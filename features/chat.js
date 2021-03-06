/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const express = require('express');
const path = require('path');

module.exports = function(controller) {

    // make public/index.html available as localhost/index.html
    // by making the /public folder a static/public asset
    controller.publicFolder('/', path.join(__dirname,'..','public'));

    controller.on('hello', async(bot, message) => {
        await bot.reply(message, {
            text: 'Hello! We have three talented developers at your fingertips. Who would you like to hire? (or you can hire all of us)',
            quick_replies: [
                {
                    title: 'Dorian',
                    payload: 'Dorian'
                },
                {
                    title: 'Ngoc',
                    payload: 'Ngoc'
                },
                {
                    title: 'Bryan',
                    payload: 'Bryan'
                },
            ]
        })
    })

    controller.on('welcome_back', async(bot, message) => {
        await bot.reply(message, {
            text: 'Welcome back! We have three talented developers at your fingertips. Who would you like to hire? (or you can hire all of us)',
            quick_replies: [
                {
                    title: 'Dorian',
                    payload: 'Dorian'
                },
                {
                    title: 'Ngoc',
                    payload: 'Ngoc'
                },
                {
                    title: 'Bryan',
                    payload: 'Bryan'
                },
            ]
        });
    })

    console.log('Chat with me: http://localhost:' + (process.env.PORT || 3000));
}