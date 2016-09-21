export const capitalize = function(s) {
    return s[0].toUpperCase() + s.substr(1);
};

export const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
};
