// Problem Statement: Given an array ‘arr of integer numbers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:

// Each student gets at least one book.
// Each book should be allocated to only one student.
// Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1

function helper(arr, pages){
    let n = arr.length;
    let students = 1;
    let pagesStudent = 0;
    for(let i = 0; i<n;i++){
        if(pagesStudent + arr[i] <= pages){
            pagesStudent += arr[i];
        }else{
            students++;
            pagesStudent = arr[i];
        }
    }
    return students;
}

function minimumNoOfPages(arr, m){
    let n = arr.length;
    if(m > n) return -1;

    let low = Math.max(...arr);
    let high = arr.reduce((a,b) => a+b, 0);
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let students = helper(arr, mid);
        if(students > m){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return low;
}

console.log(minimumNoOfPages([12, 34, 67, 90], 2))