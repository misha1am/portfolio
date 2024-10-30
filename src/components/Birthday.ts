export function calculateAge() {
    return new Date(Date.now() - new Date("2008-07-08").getTime()).getFullYear() - 1970;
}