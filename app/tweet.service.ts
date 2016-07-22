export class TweetService {
    getTweets() : object[] {
        return [
            {
                author: "Woodward",
                handle: '@Woodward',
                body: 'Learn to jump with the best of them',
                likes: 16,
                liked: false,
                img_url: 'http://lorempixel.com/100/100/?1'

            },
            {
                author: "PowderHounds",
                handle: '@PWDRhound',
                body: 'The cirque in opening tomorrow',
                likes: 4,
                liked: true,
                img_url: 'http://lorempixel.com/100/100/?2'
            },
                        {
                author: "WPPub",
                handle: '@ThePub',
                body: 'Huge in Germany at the Pub tonight.',
                likes: 0,
                liked: false,
                img_url: 'http://lorempixel.com/100/100/?3'
            },
        ]
    }
}
