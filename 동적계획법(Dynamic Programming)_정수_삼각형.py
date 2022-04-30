def solution(triangle):
  for i in range(1, triangle.__len__()):
    len = triangle[i].__len__()

    triangle[i][0] += triangle[i-1][0]
    triangle[i][len-1] += triangle[i-1][len-2]

    for j in range(1, len-1):
      maxNumber = max([triangle[i-1][j-1], triangle[i-1][j]])
      triangle[i][j] += maxNumber

  return max(triangle[triangle.__len__()-1])

      

print(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))