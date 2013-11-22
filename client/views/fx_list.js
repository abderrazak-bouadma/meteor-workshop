
var fxData = [
    {
        "location": "Paris",
        "currency": "1 EUR",
        "target": "USD",
        "country":"us",
        "rate":1.35},
    {
        "location": "Paris",
        "currency": "1 EUR",
        "target": "CHF",
        "country":"cg",
        "rate":1.33},
    {
        "location": "Paris",
        "currency": "1 EUR",
        "target": "CAN",
        "country":"ca",
        "rate":1.42},
    {
        "location": "Paris",
        "currency": "1 EUR",
        "target": "YEN",
        "country":"jp",
        "rate":136.08
    }
];


Template.fxList.helpers({
    fx: null
});