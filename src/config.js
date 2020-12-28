var config = {
    style: 'mapbox://styles/jmasselink/ckiep0yj73ujc1amnp7f9njx8',
    accessToken: 'pk.eyJ1Ijoiam1hc3NlbGluayIsImEiOiJabWhkUG5NIn0.6xSjdgz2QoNbWb-7F4BqDg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Rehabilitation of Suwar Canal in northeast Syria',
    subtitle: 'Reestablishing Al-Hasakah City\'s water supply',
    byline: 'By the Creative Development Lab',
    footer: 'Source: FURAT',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: 'Al-Hasakah City',
            // image: './path/to/image/source.png',
            description: 'Al-Hasakah is a city in northeastern Syria with a population of 1 million people. During the war, Al-Hasakah\'s clean water supply. This project\s overall goal is to reestablish the water supply and is being done in three phases.',
            location: {
                center: [40.7469948, 36.5013738],
                zoom: 8.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            hidden: false,
            title: 'Deir Ezzor Province',
            // image: './path/to/image/source.png',
            description: 'Deir Ezzor is a Province in northeastern Syria. This project\s overall goal is to reestablish the water supply and is being done in three phases.',
            location: {
                center: [40.53846, 35.69145],
                zoom: 8.93,
                pitch: 59.50,
                bearing: 21.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            hidden: false,
            title: 'Suwar Canal',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [40.4099,35.2045],
                zoom: 13,
                pitch: 60,
                bearing: 43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:  [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
