#!/user/bin/env python3
"""
Simple Python script to process form data
Takes Name and Email as input and prints the received data
"""

def main():
    print("=== Form Data Processor ===")
    print("Please enter the following information:")
    print()
    
    # Get user input
    name = input("Enter your Name: ").strip()
    email = input("Enter your Email: ").strip()
    
    # Basic validation
    if not name:
        print("Error: Name cannot be empty!")
        return
    
    if not email:
        print("Error: Email cannot be empty!")
        return
    
    if "@" not in email:
        print("Error: Email must contain '@' symbol!")
        return
    
    #Print the received data
print("\n" + "="*40)
print("SUCCESS!")
print("="*40)
print(f"Received data: Name: {name}, Email: {email}")
print("="*40)

if __name__ == "__main__":
    main()
