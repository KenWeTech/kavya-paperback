import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types"

export default {
    version: '1.3.7',
    name: 'Kavya',
    icon: 'icon.png',
    developers: [
        {
            name: "KenWeTech",
            github: "KenWeTech"
        }
    ],
    description: 'Kavita client extension for Paperback',
    contentRating: ContentRating.EVERYONE,
    badges: [
        {
            label: 'Self hosted',
            backgroundColor: "#000000",
            textColor: "#ffffff"
        },
        {
            label: 'Kavita',
            backgroundColor: '#00aa00',
            textColor: '#000000'
        }
    ],
    capabilities: SourceIntents.COLLECTION_MANAGEMENT | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.MANGA_CHAPTERS | SourceIntents.MANGA_TRACKING | SourceIntents.SETTINGS_UI
} satisfies SourceInfo