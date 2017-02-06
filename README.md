# Choose your tubeventure!

### Create your own content

Database schema:

```
{
    _id: String,
    name: String,
    createdAt: Date,
    creator: {
        name: String,
        secret: String,
    },
    youtubeId: String,
    start: {
        name: String,
        desc: String,
        interval: Array,
        pauseTime: Number,
        choices: [
            {
                name: String,
                desc: String,
                goto: Number,
                nextPauseTime: Number
            },
            // ...
        ]
    },
    decisions: [
        {
            name: String,
            desc: String,
            interval: Array,
            pauseTime: Number,
            choices: [
                {
                    name: String,
                    desc: String,
                    goto: Number,
                    nextPauseTime: Number
                },
                // ...
            ]
        },
       // ...
    ],
    end: [
        {
            name: String,
            desc: String,
            pauseTime: Number,
            endTime: Number
        },
        // ...
    ]
}
```

### Explore your imagination

### Adventure quest!
