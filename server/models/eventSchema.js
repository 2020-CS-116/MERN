// server/models/eventSchema.js is the schema for the event model. It contains the title, description, date, and location of the event. 

import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});

const Event = model('Event', eventSchema);

export default Event;
