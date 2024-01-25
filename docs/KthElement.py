def kthElement(Arr1, Arr2, k):
    m = len(Arr1)
    n = len(Arr2)
    
    if m > n:
        return kthElement(Arr2, Arr1, k)
    
    if m == 0:
        return Arr2[k - 1]
    
    if k == 1:
        return min(Arr1[0], Arr2[0])
    
    i = min(k // 2, m)
    j = k - i
    
    if Arr1[i - 1] < Arr2[j - 1]:
        return kthElement(Arr1[i:], Arr2, k - i)
    else:
        return kthElement(Arr1, Arr2[j:], k - j)


Arr1 = [1, 2, 3, 5, 6]
Arr2 = [3, 4, 5, 6, 7]
k = 5
result = kthElement(Arr1, Arr2, k)