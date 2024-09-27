// এই পদ্ধতিতে অবজেক্ট এর কোড গুলোর প্রপাইটির এক্সেস নেওয়া হয়
const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
confirm.log(person["add-dress"])