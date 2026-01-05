import React from 'react';
import { ShareIcon, MarkGithubIcon } from '@primer/octicons-react';
import { CodeBlock } from '../../components/CodeBlock';
import headshot from "../../assets/tex-headshot.jpeg";

const BlogEntry: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>

      {/* Title */}
      <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>
        How to Set Up Terraform Locally, Configure an AWS Provider, and the Simplest Backend Configuration
      </h1>

      {/* Author's Photo and Name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <img
          src={headshot} // Replace with actual author's photo URL
          style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '12px' }}
          alt="Author's Photo"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Tex Albuja</span>
          <span style={{ color: '#586069' }}>DevOps Engineer</span>
        </div>
      </div>

      {/* Introduction */}
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        Terraform is a powerful tool for infrastructure as code, allowing you to define and manage your cloud resources in a declarative way. In this guide, we'll walk through setting up Terraform locally, configuring the AWS provider, and using the simplest backend configuration to get started quickly.
      </p>

      {/* Section 1: Setting Up Terraform Locally */}
      <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>1. Setting Up Terraform Locally</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        To get started with Terraform, you need to install it on your local machine. Terraform is available for Windows, macOS, and Linux.
      </p>
      <ol style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        <li>Visit the official Terraform website at <a href="https://www.terraform.io/downloads.html" target="_blank" rel="noopener noreferrer">terraform.io/downloads</a>.</li>
        <li>Download the appropriate version for your operating system.</li>
        <li>Extract the binary and move it to a directory in your PATH (e.g., /usr/local/bin on macOS/Linux).</li>
        <li>Verify the installation by running <code>terraform version</code> in your terminal.</li>
      </ol>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        If you're on macOS, you can also install it using Homebrew: <code>brew install terraform</code>.
      </p>

      {/* Section 2: Configuring the AWS Provider */}
      <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>2. Configuring the AWS Provider</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        To use Terraform with AWS, you need to configure the AWS provider. This requires AWS credentials, which can be set up via the AWS CLI or environment variables.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        First, ensure you have the AWS CLI installed and configured with your credentials. Run <code>aws configure</code> to set up your access key, secret key, and default region.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        Create a new directory for your Terraform project and add a file named <code>main.tf</code> with the following content:
      </p>
      <CodeBlock code={`terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"  # Replace with your preferred region
}`} lang="hcl" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        This configuration specifies the AWS provider and sets the region. Terraform will use your AWS credentials from the CLI configuration.
      </p>

      {/* Section 3: The Simplest Backend Configuration */}
      <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>3. The Simplest Backend Configuration</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        Terraform backends determine how state is loaded and how operations such as <code>terraform plan</code> and <code>terraform apply</code> are executed. The simplest backend is the local backend, which stores the state file on your local filesystem.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        Add the following to your <code>main.tf</code> file (or create a separate <code>backend.tf</code> file):
      </p>
      <CodeBlock code={`terraform {
  backend "local" {}
}`} lang="hcl" />
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        This configuration uses the local backend, storing the Terraform state in a file named <code>terraform.tfstate</code> in your project directory. It's simple and doesn't require any external services, making it ideal for getting started or small projects.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        For production use, consider using a remote backend like S3 for better collaboration and state locking.
      </p>

      {/* Conclusion */}
      <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Conclusion</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        With Terraform installed locally, the AWS provider configured, and a local backend set up, you're ready to start defining your infrastructure as code. Run <code>terraform init</code> to initialize your project, then use <code>terraform plan</code> and <code>terraform apply</code> to manage your AWS resources.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
        Remember to follow AWS best practices for security and cost management. Happy terraforming!
      </p>

      {/* Social Share */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 16px', border: '1px solid #d1d9e0', borderRadius: '6px', backgroundColor: 'white' }}>
          <ShareIcon size={16} />
          Share
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 16px', border: '1px solid #d1d9e0', borderRadius: '6px', backgroundColor: 'white' }}>
          <MarkGithubIcon size={16} />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default BlogEntry;