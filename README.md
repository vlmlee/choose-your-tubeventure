# Choose your tubeventure!

### Create your own content

Database schema:

```
{
    _id: String,
    name: String,
    createdAt: Date,
    creator: {
        name: String
    },
    youtubeId: String,
    firstDecision: {
        name: String,
        pauseTime: Number,
        choices: [
            {
                choice: Number,
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
            pauseTime: Number,
            choices: [
                {
                    choice: Number,
                    name: String,
                    desc: String,
                    goto: Number,
                    nextPauseTime: Number
                },
                // ...
            ]
        },
       // ...
    ]
}
```

### Explore your imagination

### Adventure quest!
