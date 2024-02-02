# top down solution follows LCS recursive solution from exploration 3.3: Dynamic Programming
def topdown_helper(dna1, dna2, m, n, memo):
    if m < 0 or n < 0:
        return 0
    if memo[m][n] != 0:
        return memo[m][n]
    elif dna1[m] == dna2[n]:
        length = 1 + topdown_helper(dna1, dna2, m - 1, n - 1, memo)
    else:
        length = max(topdown_helper(dna1, dna2, m - 1, n, memo), topdown_helper(dna1, dna2, m, n - 1, memo))
    memo[m][n] = length
    return memo[m][n]


# receives two DNA strings and returns the length of their longest common string alignment using top-down approach
def dna_match_topdown(DNA1, DNA2):
    memo = [[0 for x in range(len(DNA1) + 1)] for x in range(len(DNA2) + 1)]
    return topdown_helper(DNA1, DNA2, len(DNA1) - 1, len(DNA2) - 1, memo)


# receives two strings, returns length of their longest common string alignment using bottom-up approach
def dna_match_bottomup(DNA1, DNA2):

    if len(DNA1) == 0 or len(DNA2) == 0:
        return 0

    # followed pseudocode from exploration 3.3: Dynamic Programming - Longest Common Subsequence Problem
    memo = [[0 for x in range(len(DNA2) + 1)] for x in range(len(DNA1) + 1)]

    for i in range(len(DNA1) + 1):
        for j in range(len(DNA2) + 1):
            if i == 0 or j == 0:
                memo[i][j] = 0
            elif DNA1[i - 1] == DNA2[j - 1]:
                memo[i][j] = memo[i - 1][j - 1] + 1
            else:
                memo[i][j] = max(memo[i - 1][j], memo[i][j - 1])

    return memo[len(DNA2)][len(DNA1)]


a = 'AT'
b = 'G'
print(dna_match_topdown(a, b))
print(dna_match_bottomup(a, b))
