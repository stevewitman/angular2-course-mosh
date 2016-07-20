export class TweetService {
    getTweets() : object[] {
        return [
            {
                title: "Woodward",
                handle: '@Woodward',
                body: 'Learn to jump with the best of them',
                likes: 16,
                img_url: 'http://lorempixel.com/100/100/?1'

            },
            {
                title: "Rope drops!",
                handle: '@PWDRhound',
                body: 'The cirque in opening tomorrow',
                likes: 4,
                img_url: 'http://lorempixel.com/100/100/?2'
            },
                        {
                title: "Live Music",
                handle: '@ThePub',
                body: 'Huge in Germany at the Pub tonight.',
                likes: 0,
                img_url: 'http://lorempixel.com/100/100/?3'
            },
        ]
    }
}
