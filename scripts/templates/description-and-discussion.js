module.exports = (title, slugName) => {
    return (`# ${title}

https://leetcode.com/problems/${slugName}

---

<!-- 🟡 Add the problem description here. -->

---

# Discussion

### Approach
<!-- 🟡 Discuss possible approaches, algorithms, and data structures to solve this problem. -->

### Runtime
<!-- 🟡 Discuss the runtime complexity in Big-O notation for your algorithm. -->

### Space
<!-- 🟡 Discuss the space complexity of your algorithm and data structures. -->

`)
};