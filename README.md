# React Native FlatList Key Issue

This repository demonstrates a common bug in React Native's FlatList and SectionList components: incorrect data updates due to improperly handled keys.

## The Bug
When updating the data displayed in a FlatList or SectionList, it's crucial to provide unique and consistent keys for each item.  If the keys aren't unique, React Native may not correctly identify the changes, leading to unexpected behavior such as missing or duplicate items, or items not being updated even when the data changes. 

## The Solution
The solution involves ensuring each item has a unique, consistent key.  This key should ideally be an immutable value that uniquely identifies the item within the data set. The example below utilizes a unique ID assigned to each item; using index is generally discouraged because it can cause issues if items are added or removed.