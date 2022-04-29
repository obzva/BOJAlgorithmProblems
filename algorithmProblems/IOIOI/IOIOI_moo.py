import sys
input = sys.stdin.readline
N = int(input())
find_s = ''.join(["I" if x % 2 == 0 else "O" for x in range(2 * N + 1)])
l = int(input())
s = str(input())
pi = [0] +list(range(2 * N))
i = 0
cnt = 0
while (i + 2 * N + 1) < l: #i + 패턴길이가 string 길이보다 작으면 시행
    j = 0
    while (j < 2 * N + 1):
        if find_s[j] != s[i + j]:
            break
        j += 1
    if j == 2 * N + 1:
        cnt += 1
        i += 2
    else:
        i += pi[j] + 1
print(cnt)