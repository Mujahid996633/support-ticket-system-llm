from django.db import models

class Ticket(models.Model):
    # [span_2](start_span)Choices as defined in the assessment requirements[span_2](end_span)
    CATEGORY_CHOICES = [
        ('billing', 'Billing'),
        ('technical', 'Technical'),
        ('account', 'Account'),
        ('general', 'General'),
    ]
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('critical', 'Critical'),
    ]
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
        ('closed', 'Closed'),
    ]

    [span_3](start_span)title = models.CharField(max_length=200) # Required max_length 200[span_3](end_span)
    [span_4](start_span)description = models.TextField() # Required field[span_4](end_span)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    [span_5](start_span)status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open') # Defaults to open[span_5](end_span)
    [span_6](start_span)created_at = models.DateTimeField(auto_now_add=True) # Auto-set on creation[span_6](end_span)

    class Meta:
        [span_7](start_span)ordering = ['-created_at'] # Ensures newest first as required[span_7](end_span)

    def __str__(self):
        return self.title
      
