export const userPickerLists = [
    {
        emoji: "🍉",
        title: "Fruits List",
        readonly: false,
        pinned: false,
        items: [
            { title: "Apple", isActive: true },
            { title: "Banana", isActive: true },
            { title: "Cherry", isActive: false },
            { title: "Dragonfruit", isActive: true },
            { title: "Elderberry", isActive: false },
            { title: "Orange", isActive: false },
            { title: "Grapes", isActive: false },
            { title: "Mango", isActive: false },
            { title: "Blueberry", isActive: false },
            { title: "Papaya", isActive: false },
            { title: "Pineapple", isActive: false },
            { title: "Watermelon", isActive: false },
            { title: "Peach", isActive: false },
            { title: "Strawberry", isActive: false }
        ]
    },
    {
        emoji: "🍽️",
        title: "Dinner Options",
        readonly: false,
        pinned: true,
        items: [
            { title: "Pizza", isActive: true },
            { title: "Burger", isActive: true },
            { title: "Pasta", isActive: false },
            { title: "Sushi", isActive: true },
            { title: "Salad", isActive: false },
            { title: "Tacos", isActive: false },
            { title: "Steak", isActive: false },
            { title: "Ramen", isActive: false }
        ]
    },
    {
        emoji: "🎮",
        title: "Weekend Activities",
        readonly: false,
        pinned: false,
        items: [
            { title: "Movie Night", isActive: true },
            { title: "Gaming", isActive: true },
            { title: "Hiking", isActive: false },
            { title: "Bowling", isActive: true },
            { title: "Shopping", isActive: false },
            { title: "Reading", isActive: false },
            { title: "Road Trip", isActive: false },
            { title: "Camping", isActive: false }
        ]
    }
];


export const presetPickerLists = [
    {
        emoji: "📅",
        title: "Weekdays",
        readonly: true,
        pinned: false,
        items: [
            { title: "Monday", isActive: true },
            { title: "Tuesday", isActive: true },
            { title: "Wednesday", isActive: true },
            { title: "Thursday", isActive: true },
            { title: "Friday", isActive: true },
            { title: "Saturday", isActive: true },
            { title: "Sunday", isActive: true }
        ]
    },
    {
        emoji: "🌈",
        title: "Colors",
        readonly: true,
        pinned: false,
        items: [
            { title: "Red", isActive: true },
            { title: "Orange", isActive: true },
            { title: "Yellow", isActive: true },
            { title: "Green", isActive: true },
            { title: "Blue", isActive: true },
            { title: "Indigo", isActive: true },
            { title: "Violet", isActive: true }
        ]
    },
    {
        emoji: "📆",
        title: "Months",
        readonly: true,
        pinned: false,
        items: [
            { title: "January", isActive: true },
            { title: "February", isActive: true },
            { title: "March", isActive: true },
            { title: "April", isActive: true },
            { title: "May", isActive: true },
            { title: "June", isActive: true },
            { title: "July", isActive: true },
            { title: "August", isActive: true },
            { title: "September", isActive: true },
            { title: "October", isActive: true },
            { title: "November", isActive: true },
            { title: "December", isActive: true }
        ]
    },
    {
        emoji: "🔢",
        title: "Number Range (1-10)",
        readonly: true,
        pinned: false,
        items: Array.from({ length: 10 }, (_, i) => ({
            title: `${i + 1}`,
            isActive: true
        }))
    }
];
