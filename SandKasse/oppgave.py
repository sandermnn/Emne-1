def calculate_median(numbers):
    numbers.sort()
    length = len(numbers)

    if length % 2 == 1:
        return numbers[length // 2]

        else: 
            mid1 = length // 2
            mid2 = mid1 - 1
            return(numbers[mid1] + numbers[mid2]) / 2



         #test
            numbers = [42, 56, 78, 31, 67]
            print("Median:", calculate_median(numbers))